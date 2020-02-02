<template>
    <div>
        <div class="flex justify-between">
            <a href="javascript:void(0);" class="text-blue-400" @click="$router.back()">
                < Back
            </a>
        </div>

        <form @submit.prevent="submitForm">
            <InputField name="name" label="Contact Name" :errors="errors" :data="form.name" placeholder="Contact Name" @update:field="form.name = $event" />
            <InputField name="email" label="Contact E-mail" :errors="errors" :data="form.email" placeholder="Contact E-mail" @update:field="form.email = $event" />
            <InputField name="company" label="Contact Company" :errors="errors" :data="form.company" placeholder="Contact Company" @update:field="form.company = $event" />
            <InputField name="birthday" label="Contact Birthday" :errors="errors" :data="form.birthday" placeholder="MM/DD/YYYY" @update:field="form.birthday = $event" />

            <div class="flex justify-end">
                <button class="py-2 px-4 rounded text-red-700 border mr-5 hover:border-red-700" @click.prevent="$router.back()">Cancel</button>
                <button class="bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-400">Save</button>
            </div>
        </form>
    </div>
</template>

<script>
    import InputField from '../components/InputField';
    export default {
        name: 'ContactsEdit',

        components: {
            InputField
        },

        mounted() {
            axios.get('/api/contacts/' + this.$route.params.id)
                .then(response => {
                    this.form = response.data.data;
                    this.loading = false;
                })
                .catch(error => {
                    this.loading = false;

                    if (error.response.status === 404) {
                        this.$router.push('/contacts');
                    }
                });
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
                axios.patch('/api/contacts/' + this.$route.params.id, this.form)
                    .then(response => {
                        this.$router.push(response.data.links.self);
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