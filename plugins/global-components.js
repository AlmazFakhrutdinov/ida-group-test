import Vue from 'vue'
import Button from '@/components/shared/Button'
import Icon from '@/components/shared/Icon'
import Input from '@/components/shared/Input'

const components = { Button, Icon, Input }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
