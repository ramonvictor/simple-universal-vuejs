<template>
	<div>
	  <h2 v-on:click="greet">Essential Links</h2>
	  <ul>
	  	   <template v-for="link in links">
		     <li>
		    	<a :href="link.url" target="_blank">
		    		{{link.text}}
		    	</a>
	    	  </li>
	      </template>
	  </ul>
	</div>
</template>

<script>
export default {
	props: ['links'],
	methods: {
    greet: function (event) {
    	event.preventDefault();
      console.log(':: clicked element', event.target);
    }
   }
}
</script>




