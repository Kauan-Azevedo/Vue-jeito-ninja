<template>
  <div class="container">
    <CardVue>
      <h2 slot="title">Titulo</h2>
      <p slot="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quas
        quo unde assumenda sapiente doloribus optio labore sit pariatur, dolorem
        perferendis corrupti soluta laudantium error ab dolor reiciendis iusto
        autem.
      </p>
      <a slot="action" href="#">Ver mais!</a>
    </CardVue>
    <CardVue>
      <h2 slot="title">Titulo</h2>
      <template slot="text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          quas quo unde assumenda sapiente doloribus optio labore sit pariatur,
          dolorem perferendis corrupti soluta laudantium error ab dolor
          reiciendis iusto autem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          voluptatem sapiente necessitatibus perspiciatis repellendus aspernatur
          eius, consectetur a, voluptas consequatur tempore dignissimos
          consequuntur iste eveniet aperiam odit impedit saepe quos?
        </p>
      </template>
      <a slot="action" href="#">Ver mais!</a>
    </CardVue>
  </div>
</template>

<script>
import CardVue from "@/components/Class16/Card.vue";

export default {
  components: {
    CardVue,
  },
};
</script>
