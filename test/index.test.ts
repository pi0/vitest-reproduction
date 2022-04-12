import { it, expect } from 'vitest'
import { myLuckyNumber } from '../src'

it('myFn a number', () => {
  expect(typeof myLuckyNumber).toBe('number')
})
