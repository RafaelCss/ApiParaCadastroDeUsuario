import { expect, test, describe, it } from 'vitest'
import { CriarUsuario } from './usuario'
import {  SalvarUsuario } from './salvarusuario'

test('criar class SalvarUsuario', () => {
  const salvarUsuario = new CriarUsuario({
    email: 'rf2014@gmail.com',
    nome: 'rafael',
    senha: '123546'
  })

  expect(salvarUsuario).toBeInstanceOf(CriarUsuario)
})


describe('Criando Novo usuario', () => {
  it('Deveria criar este usuario ....', () => {
    const criarUser = new SalvarUsuario()

    expect(criarUser.cadastrar({
      email: 'rf2014@gmail.com',
      senha: '152',
      nome: 'rafael'
    })).resolves.toBeInstanceOf(CriarUsuario)
  })
})