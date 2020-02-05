<template>
    <v-dialog max-width="600px">
        <v-btn flat slot="activator" class="success">Add New Project</v-btn>
        <v-card>
            <v-card-title>
                <h2>Add a New Project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title" v-model="Title" prepend-icon="folder" :rules="inputrules"></v-text-field>
                    <v-textarea label="Information" v-model="Content" prepend-icon="edit" :rules="inputrules"></v-textarea>

                    <v-menu>
                        <v-text-field :rules="inputrules" :value="Due_Date" slot="activator" label="Due Date"  v-on="on"
                          @click:clear="date = null" prepend-icon="date_range"></v-text-field>
                        <v-date-picker v-model="Due_Date"></v-date-picker>
                    </v-menu>

                    <v-spacer></v-spacer>

                    <v-btn flat class="success mx-0 mt-3" @click="submit" :loading="loading">Add Project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import format from 'date-fns/format'
import db from '@/fb'

export default {
  data () {
    return {
      Title: '',
      Content: '',
      Due_Date: null,
      inputrules: [
        v => v.length >= 8 || 'Minimum length is 8 characters'
      ],
      loading: false
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        this.loading = true
        const Project = {
          Title: this.Title,
          Content: this.Content,
          Due_Date: format(this.Due_Date, 'MM/YYYY'),
          Person: 'Kelvin Oshomegie',
          Status: 'Ongoing'
        }

        db.collection('Projects').add(Project).then(() => {
          this.loading = false
        })
      }
    }
  },
  computed: {
    formatteddate () {
      return this.Due_Date ? format(this.Due_Date, 'MM/YYYY') : ''
    }
  }
}
</script>

<style>

</style>
