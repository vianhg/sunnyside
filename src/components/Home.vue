<template>
  <section class="main">
    <CreativeComponent></CreativeComponent>
    <TransformComponent></TransformComponent>
    <StandOutComponent></StandOutComponent>
    <GraphicDesignAndPhotography></GraphicDesignAndPhotography>
    <ClientTestimonialComponent></ClientTestimonialComponent>
    <GalleryComponent></GalleryComponent>
    <FooterComponent></FooterComponent>
  </section>
  <div class="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
      >Frontend Mentor</a
    >. Coded by <a href="#">vianhg</a>.
  </div>
</template>

<script>
import CreativeComponent from "./CreativeComponent.vue";
import TransformComponent from "./TransformComponent.vue";
import StandOutComponent from "./StandOutComponent.vue";
import GraphicDesignAndPhotography from "./GraphicDesignAndPhotography.vue";
import ClientTestimonialComponent from "./ClientTestimonialComponent.vue";
import GalleryComponent from "./GalleryComponent.vue";
import FooterComponent from "./FooterComponent.vue";
export default {
  name: "Home",
  setup() {},
  components: {
    CreativeComponent,
    TransformComponent,
    StandOutComponent,
    GraphicDesignAndPhotography,
    ClientTestimonialComponent,
    GalleryComponent,
    FooterComponent
},
};
</script>

<style lang="scss">
@import "@/assets/css/tokens.scss";
@import "@/assets/css/main.scss";
</style>
