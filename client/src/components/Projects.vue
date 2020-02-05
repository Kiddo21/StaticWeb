<template>
    <div class="projects">
        <h1 class="subheading grey--text"> Projects </h1>
        <v-container class="my-5">
            <v-expansion-panel>
                <v-expansion-panel-content v-for="project in myProjects" :key="project.Title">
                    <div slot="header">{{ project.Title }}</div>
                    <v-card>
                        <v-card-text class="px-4 grey--text">
                            <div class="font-weight-bold">due by {{ project.Due_Date }}</div>
                            <div>{{ project.Content }}</div>
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        {Title: 'create a new website', Person: 'Ferdynand', Due_Date: '3rd March 2019', Status: 'Ongoing', Content: 'Learning how to create new websites with Vue.js and Vuetify framework'},
        {Title: 'Learn PHP', Person: 'Ted', Due_Date: '30th September 2019', Status: 'Not_Began', Content: 'Will learn how to design webpages and program different codes using PHP programming language'},
        {Title: 'Nspire final project', Person: 'Oshomegie', Due_Date: '9th January 2020', Status: 'Ongoing', Content: 'Build a Recipe application to help people learn about the different cuisines of countries around the world'},
        {Title: 'Create business plan', Person: 'Kelvin', Due_Date: '11th September 2019', Status: 'OverDue', Content: 'Create a business plan to help you make more money'},
        {Title: 'create a new Apllication', Person: 'Ferdynand', Due_Date: ' 18th November 2019', Status: 'Ongoing', Content: 'Learning how to create new websites with Vue.js and Vuetify framework'}
      ]

    }
  },

  computed: {
    myProjects () {
      return this.projects.filter(project => {
        return project.Person === 'Ferdynand'
      })
    }
  }

}
</script>

<style>

</style>
