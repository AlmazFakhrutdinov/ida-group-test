import Vue from 'vue'

import capitalize from '~/helpers/filters/capitalize'
import spaceAfterEveryThirdCharacter from '~/helpers/filters/spaceAfterEveryThirdCharacter'

Vue.filter('capitalize', capitalize)
Vue.filter('spaceAfterEveryThirdCharacter', spaceAfterEveryThirdCharacter)
