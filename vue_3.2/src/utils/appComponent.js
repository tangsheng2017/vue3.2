import * as ELIcons from '@element-plus/icons-vue'
import CommonCard from '@/components/CommonCard'
import CommonTable from '@/components/CommonTable'
import CommonPagination from '@/components/CommonPagination'

export default (app) => {
  for (const iconName in ELIcons) {
    app.component(iconName, ELIcons[iconName])
  }
  app.component('CommonCard', CommonCard)
  app.component('CommonTable', CommonTable)
  app.component('CommonPagination', CommonPagination)
}
