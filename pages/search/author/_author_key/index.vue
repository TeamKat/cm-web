<script>
import SearchDetail from "@/layouts/search-detail";
import {capitalize} from "@/utils/text-tranform";

export default {
  extends: SearchDetail,
  name: 'author',
  data() {
    return {
      authorKey: this.$route.params.author_key,
    }
  },
  computed: {
    title() {
      return capitalize(this.$t('text.author') + " " + this.authorKey)
    },
  }
}
</script>
