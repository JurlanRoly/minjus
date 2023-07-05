<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="card card card-w-title">
        <Button type="button" label="Mis peliculas" @click="misPeliculas" />            
    </div>
    <div class="card card card-w-title">
        <InputText id="name" type="text" v-model="search" @input="searchPelicula"/>            
    </div>
    <DataTable :value="records" tableStyle="min-width: 50rem">
            <Column field="imdbID" header="Id"></Column>
            <Column field="Title" header="Title"></Column>
            <Column header="Poster">
                <template #body="slotProps">
                    <img :src="slotProps.data.Poster" class="w-6rem shadow-2 border-round" />
                </template>
            </Column>
            
            <Column  header="Marcar">            
                <template #body="slotProps">
                    <Button type="button" label="Ver mas" @click="mas(slotProps.data)" />
                </template>
            </Column>
    </DataTable>
    <Dialog v-model:visible="visible" :style="{ width: '50vw' }" class="mt-0 mx-auto mb-5 block shadow-2">
        <div class="card card card-w-title">Poster: <img :src="record.Poster" class="w-6rem shadow-2 border-round" /></div>
        <div class="card card card-w-title">Title: {{ record.Title }}</div>
        <div class="card card card-w-title">Year: {{ record.Year }}</div>
        <div class="card card card-w-title">Type: {{ record.Type }}</div>
        <Button type="button" label="Incluir a favoritos" @click="favorito(record)" />
    </Dialog>
</template>
  
<script setup>
    import PeliculaService from '@/services/PeliculaService';
    
    import { ref, onMounted } from 'vue';
   
    onMounted(() => {
        
    });

    const records = ref(); 
    const recordsFavorito = ref();
    const favoritos = ref([]);    
    const record = ref();
    const search = ref('');
    const visible = ref(false);
    // const form = ref({
    //     name: '',
    //     active: false    
    // });

    const searchPelicula = () => {
        if (search.value.length >= 3){
                PeliculaService.getByName(search.value).then((data) => {
                console.log(data.data.Search);
                records.value = data.data.Search
            });
        }
    }
    const mas = (data) => {
        record.value = data;
        visible.value = true;
    }
    const favorito = (data) => {
        favoritos.value.push(data);
        console.log(favoritos.value)
        const datos = {
            title: data.Title,
            type: data.Type,
            poster: data.Poster,
            year: data.Year            
        }
        PeliculaService.create(datos).then((data) => {
            console.log(data)
            // favoritos.value.push(data);
        });
    }
    
    const misPeliculas = () => {
        PeliculaService.getAll().then((data) => (recordsFavorito.value = data.data));
    }

    
    // const onSubmit = () => {
    //     // PriorityService.create(form.value).then((data) => {
    //     //     records.value.push(data);
    //     // });
    // }

</script> 