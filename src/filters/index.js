import Vue from 'vue'
import filter from './filter'

Object.keys(filter).forEach(k => Vue.filter(k, filter[k]))
