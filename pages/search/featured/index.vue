<script>
import SearchDetail from "@/layouts/search-detail";
import {capitalize} from "@/utils/text-tranform";

export default {
  extends: SearchDetail,
  name: 'featured',
  computed: {
    title() {
      return capitalize(this.$t('text.featured'))
    },
  }
}
</script>
