<template>
    <div class="Home">
        // h1 is for headers
       <h1> HomePage </h1>
        // the p tag is for paragraphs
        <p class="red white--text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis modi voluptate consequuntur quia? Cum beatae quidem laboriosam reprehenderit unde corporis veniam. Voluptatem autem alias iure laborum voluptatibus velit, necessitatibus asperiores?</p>
        <p class="pink lighten-3 red--text text--darken-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iure quam nulla consequuntur amet placeat, sapiente alias inventore? Aliquam modi natus, rem omnis dolore voluptatem labore tempore tenetur quis. In.
        </p>
        // display dash any number 1-4 is a prop for text size
        <h1> class="display-4">Massive Display</h1>
        <h2 class="display-1">Smaller Display</h2>
<!-- expansion panels -->
                <v-expansion-panel>
            <v-expansion-panel-content
                v-for="(item,i) in 5"
                :key="i"
            >
            <div slot="header">Item</div>
            <v-card>
                <v-card-text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit possimus quis repellendus omnis
                    provident totam suscipit laudantium quos quam recusandae! Animi debitis explicabo
                    cupiditate aut, vitae accusamus veritatis nesciunt rerum?
                </v-card-text>
            </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>

        <!-- buttons -->
        <v-btn class="pink white--text">Click me</v-btn>
        <v-btn depressed color="pink">click me</v-btn>
        <v-btn flat color="pink">click me</v-btn>
        <v-btn depressed class="pink white--text">
            <v-icon left>email</v-icon>
            <span>email me</span>
        </v-btn>
        <v-btn depressed small class="blue white--text">
            <v-icon center>favorite</v-icon>
        </v-btn>
        <v-btn fab depressed small dark color="purple">
           <center><v-icon>favorite</v-icon></center>
        </v-btn>
    </div>
    
</template>

<script>
export default {

}
</script>

<style>

</style>
