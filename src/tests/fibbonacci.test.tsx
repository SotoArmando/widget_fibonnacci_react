import React from 'react';
import { render, screen } from '@testing-library/react';
import Fibonacci from '../Brain'
import test100  from './test100'

test('Returns first 10 fibonacci sequence elements', () => {
  [0,1,1,2,3,5,8,13,21,34].forEach(e => {
    expect(Fibonacci(10)).toContain(e)
  })
});

test('Returns first 100 fibonacci sequence elements', () => {
  test100.forEach(e => {
    expect(Fibonacci(100)).toContain(e)
  })
});