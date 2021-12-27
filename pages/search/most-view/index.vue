<script>
import SearchDetail from "@/layouts/search-detail";
import {capitalize} from "@/utils/text-tranform";

export default {
  extends: SearchDetail,
  head() {
    return {
      title: capitalize(this.$t('text.most_view'))
    };
  },
}
</script>
