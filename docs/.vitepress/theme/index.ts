import DefaultTheme from "vitepress/theme";
import LayoutImage from "./components/Layout-image.vue";
import { Theme } from "vitepress";
import {h} from "vue"

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h(LayoutImage)
    })
  }
} satisfies Theme