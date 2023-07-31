<script setup>

const fruits = [ "Spartan.svg", "Gala.svg", "Macky.svg", "Cavendish.svg", "Lady.svg", "Smoothie.svg", "Seville.svg", "Navel.svg", "Clement.svg", ]


const randomIndex = useRandom(fruits.length)

</script>

<template>
  <section class="flex mt-32">
    <div class="w-1/2 flex items-center justify-center">
      <img :src="`/images/${fruits[randomIndex]}`" alt="image of fruit" class="w-96"/>
    </div>
    <div class="w-1/2">
      <p class="mb-3">
        Prepare for an epic clash between the juiciest warriors in the fruit kingdom! Get
        ready to witness thrilling battles as apples, oranges and bananas. The fruits
        champions go head-to-head in an arena of excitement.
      </p>
      <p class="mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quis provident
        explicabo porro tempore esse accusamus hic quas ut ratione! Quod, facilis natus
        dolores possimus doloremque ab et ut recusandae.
      </p>
      <p class="mb-3">
        Explicabo temporibus quaerat esse magni in alias a qui repellendus aperiam numquam
        error voluptas maxime, quae itaque eum, sint nam inventore possimus similique
        voluptates culpa vitae cumque? Totam, magni nihil?
      </p>
      <p>
        Dolore quos neque officia mollitia quisquam facilis, odio error beatae debitis
        non. Sit, blanditiis aspernatur eum expedita perferendis perspiciatis fugit
        corporis ratione fuga soluta, voluptatum nisi possimus laboriosam illum omnis.
      </p>
    </div>
  </section>
</template>

<style scoped></style>
