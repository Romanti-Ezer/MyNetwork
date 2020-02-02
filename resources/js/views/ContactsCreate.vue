<template>
    <div>
        <form @submit.prevent="submitForm">
            <InputField name="name" label="Contact Name" :errors="errors" placeholder="Contact Name" @update:field="form.name = $event" />
            <InputField name="email" label="Contact E-mail" :errors="errors" placeholder="Contact E-mail" @update:field="form.email = $event" />
            <InputField name="company" label="Contact Company" :errors="errors" placeholder="Contact Company" @update:field="form.company = $event" />
            <InputField name="birthday" label="Contact Birthday" :errors="errors" placeholder="MM/DD/YYYY" @update:field="form.birthday = $event" />

            <div class="flex justify-end">
                <button class="py-2 px-4 rounded text-red-700 border mr-5 hover:border-red-700">Cancel</button>
                <button class="bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-400">Add New Contact</button>
            </div>
        </form>
    </div>
</template>

<script>
    import InputField from '../components/InputField';
    export default {
        name: 'ContactsCreate',

        components: {
            InputField
        },

        data: function() {
            return {
                form: {
                    'name': '',
                    'email': '',
                    'company': '',
                    'birthday': ''
                },

                errors: null,
            }
        },

        methods: {
            submitForm: function() {
                axios.post('/api/contacts', this.form)
                    .then(response => {

                    })
                    .catch(errors => {
                        this.errors = errors.response.data.errors;
                    });
            }
        }
    }
</script>

<style>

</style>