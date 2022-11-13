<script>
import peopleService from '@/services/people-service'

export default {
    name: 'DashboardView',
    data() {
        return {
            people: [],
            error: null,
        }
    },
    created() {
        this.getPeople()
    },
    methods: {
        async getPeople() {
            try {
                const response = await peopleService.get()

                this.people = response.data.data
            } catch ({ response }) {
                this.error = response.data
            }
        },
    },
}
</script>

<template>
    <div>
        <h1>Dashboard View</h1>

        <p v-if="error">{{ `Error: ${error.status} - ${error.code}` }}</p>

        <p v-if="!people.length && !error">Loading...</p>

        <ul v-else>
            <li v-for="person in people" :key="person.id">
                {{ `${person.firstname} ${person.lastname}` }}
            </li>
        </ul>
    </div>
</template>
