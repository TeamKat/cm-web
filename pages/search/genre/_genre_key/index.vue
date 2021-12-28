<script>
import SearchDetail from "@/layouts/search-detail";
import {capitalize} from "@/utils/text-tranform";

export default {
  extends: SearchDetail,
  name: 'genre',
  data() {
    return {
      genreKey: this.$route.params.genre_key,
    }
  },
  computed: {
    title() {
      return capitalize(this.$t('text.genre') + " " + this.genreKey)
    },
  }
}
</script>
