import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup'
import {useYupResolver} from '../../hooks';

const FormWrapper = styled.div`
  width: 30%;
  min-width: 250px;
  margin: 0 auto;
`

const HeroText = styled.p`
  text-align: center;
  font-size: 3rem;
`

const ErrorText = styled.span`
  color: red;
  font-size: 12px;
`

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100px;
`

const Input = styled.input`
  padding: 7px 15px;
  border: 1px solid #eee;
  border-radius: 5px;
  margin: 10px 0;
`

const SubmitButton = styled.button`
  padding: 5px 10px;
  background-color: #eee;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  transition: .3s;
  
  &:hover {
    background-color: #ddd;
  }
`

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required('Username is required')
        .min(1, 'Username must be at least 1 character'),
    password: Yup.string()
        .required('Password is required')
        .min(3, 'Password must be at least 6 character'),
    confirmPassword: Yup.string()
        .required('Password is required')
        .oneOf([Yup.ref('password')], 'Passwords does not match'),
})

const FormPage = () => {
    const resolver = useYupResolver(validationSchema)

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver });

    const submit = data => alert(JSON.stringify(data, null, 3));

    return (
        <FormWrapper>
            <HeroText>Register form</HeroText>
            <form onSubmit={handleSubmit(submit)}>
                <FieldContainer>
                    <label htmlFor="username">Username</label>
                    <Input
                        placeholder='Username'
                        name='username' {...register('username', { required: true })}
                    />
                    {errors.username && <ErrorText>{errors.username.message}</ErrorText>}
                </FieldContainer>
                <FieldContainer>
                    <label htmlFor="password">Password</label>
                    <Input
                        placeholder='Password'
                        name='password' {...register('password', { required: true })}
                    />
                    {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
                </FieldContainer>
                <FieldContainer>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <Input
                        placeholder='Confirm password'
                        name='confirm-password' {...register('confirmPassword', { required: true })}
                    />
                    {errors.confirmPassword && <ErrorText>{errors.confirmPassword.message}</ErrorText>}
                </FieldContainer>
                <SubmitButton type="submit">Send</SubmitButton>
            </form>
        </FormWrapper>
    )
}

export { FormPage };