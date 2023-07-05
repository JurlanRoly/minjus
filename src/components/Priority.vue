<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="card card card-w-title">
        <Button label="Nuevo" icon="pi pi-external-link" @click="visible = true" />
        <DataTable :value="records" tableStyle="min-width: 50rem">
            <Column field="id" header="Id"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="active" header="Active"></Column>
        </DataTable>
        <Dialog v-model:visible="visible" modal header="Formulario de registro" :style="{ width: '50vw' }" class="mt-0 mx-auto mb-5 block shadow-2">
            <form @submit="onSubmit">

                <div class="field">
                    <label for="name">Nombre</label>
                    <InputText id="name" type="text" v-model="form.name" />
                </div>
                <div class="field">                    
                    <label for="active">Estado</label>
                    <Checkbox v-model="form.active" id="active" :binary="true" class="mb-2" />
                </div>                
                <Button type="submit" label="Guardar" />                                  
            </form>
        </Dialog>
    </div>
</template>
  
<script setup>
    import PriorityService from '@/services/PriorityService';
    import { ref, onMounted } from 'vue';

    onMounted(() => {
        PriorityService.getAll().then((data) => (records.value = data.data));
    });

    const records = ref();
    const visible = ref(false);
    const form = ref({
        name: '',
        active: false    
    });

    const onSubmit = () => {
        PriorityService.create(form.value).then((data) => {
            records.value.push(data);
        });
    }

</script> 