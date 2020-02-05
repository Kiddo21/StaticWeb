<template>
    <v-dialog max-width="600px">
        <v-btn flat slot="activator" class="success">Add New Project</v-btn>
        <v-card>
            <v-card-title>
                <h2>Add a New Project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputrules"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="inputrules"></v-textarea>

                    <v-menu>
                        <v-text-field :rules="inputrules" :value="Due_Date" slot="activator" label="Due Date" prepend-icon="date_range"></v-text-field>
                        <v-date-picker v-model="Due_Date"></v-date-picker>
                    </v-menu>

                    <v-spacer></v-spacer>

                    <v-btn flat class="success mx-0 mt-3" @click="submit">Add Project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import format from 'date-fns/format'

export default {
  data () {
    return {
      title: '',
      content: '',
      Due_Date: null,
      inputrules: [
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ]
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        console.log(this.title, this.content)
      }
    }
  },
  computed: {
    formatteddate () {
      return this.Due_Date ? format(this.Due_Date, 'Do MMM YYYY') : ''
    }
  }
}
</script>

<style>

</style>
