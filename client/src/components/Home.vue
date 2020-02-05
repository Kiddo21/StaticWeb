<template>
    <div class="Home">
        <v-container class="my-5">
            <v-layout row class="mb-3">
                <v-tooltip top>
                  <v-btn small flat color="grey" @click="sortby('title')" slot="activator">
                    <v-icon left small>folder</v-icon>
                    <span class="caption text-uppercase">By Project Name</span>
                  </v-btn>
                  <span>Sort Projects By Project Name</span>
                </v-tooltip>
                <v-tooltip top>
                  <v-btn small flat color="grey" @click="sortby('person')" slot="activator">
                    <v-icon left small>person</v-icon>
                    <span class="caption text-uppercase">By Person</span>
                  </v-btn>
                  <span>Sort Projects By Person</span>
                </v-tooltip>

            </v-layout>
            <v-card flat v-for="project in projects" :key="project.title">
                <v-layout row wrap :class="`pa-3 project ${project.Status}`">
                    <v-flex class="xs12 md6">
                        <div class="caption grey--text">Project Title</div>
                        <div>{{project.Title}}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Person</div>
                        <div>{{project.Person}}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Due_Date</div>
                        <div>{{project.Due_Date}}</div>
                    </v-flex>
                    <v-flex xs2 sm4 md2>
                        <div class="right">
                            <v-chip small :class="`${project.Status} white--text caption my-2`">{{project.Status}}</v-chip>
                        </div>
                    </v-flex>
                    <v-flex xs12 md6>
                        <div class="caption grey--text">Content</div>
                        <div>{{project.Content}}</div>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
            </v-card>
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
        {Title: 'Create business plan', Person: 'Kelvin', Due_Date: '11th September 2019', Status: 'OverDue', Content: 'Create a business plan to help you make more money'}
      ]
    }
  },
  methods: {
    sortby (property) {
      this.projects.sort((a, b) => a[property] < b[property] ? -1 : 1)
    }
  }

}
</script>

<style>
.project.Ongoing {
    border-left: 4px solid #3cd1c2;
}
.project.Not_Began {
    border-left: 4px solid orange;
}
.project.OverDue {
    border-left: 4px solid tomato;
}
.v-chip.Ongoing {
    background: #3cd1c2;
}
.v-chip.Not_Began {
    background: orange;
}
.v-chip.OverDue {
    background: tomato;
}
</style>
