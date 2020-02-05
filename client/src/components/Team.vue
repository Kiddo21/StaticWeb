<template>
    <div class="team">
        <h1 class="subheading grey--text">Team</h1>

        <v-container class="my-5">
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.Name">
                    <v-card flat class="text-xs-center ma-3">
                        <v-responsive class="pt-4">
                            <v-avatar size="100" class="blue lighten 3">
                                <img :src="person.Avatar">
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="subheading">{{person.Name}}</div>
                            <div class="grey-text">{{person.Role}}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn flat color="grey">
                                <v-icon small left>message</v-icon>
                                <span>Message</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      team: [
        {Name: 'Ferdynand', Role: 'Web Developer', Avatar: '/messi3.jpg'},
        {Name: 'Oshomegie', Role: 'Web Developer', Avatar: '/arsenal kit.jpg'},
        {Name: 'Ted', Role: 'Programmer', Avatar: '/adidas.jpg'},
        {Name: 'Kelvin', Role: 'Sales Guru', Avatar: '/golovin.jpg'}
      ]
    }
  }

}
</script>

<style>

</style>
