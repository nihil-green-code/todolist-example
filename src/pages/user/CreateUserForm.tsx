import React, {
  FormEvent, useCallback
} from 'react';
import { useInput } from '@/hooks/useInput';
import { AppLayout } from '@/layouts/AppLayout';

export function CreateUserForm() {
  const userId = useInput();
  const password = useInput();

  const onClickSubmit = useCallback((e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  }, []);

  const onClickReset = useCallback((e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    userId.setValue('');
    password.setValue('');
  }, []);

  return (
    <>
      <AppLayout>
        <form>
          <label htmlFor='user-id'>
            아이디
            <input
              type='text'
              id='user-id'
              name='userId'
              {...userId.nodeValue}
            />
          </label>

          <label htmlFor='password'>
            비밀번호
            <input
              type='text'
              id='password'
              name='password'
              {...password.nodeValue}
            />
          </label>

          <button type='submit' onClick={onClickSubmit}>가입</button>
          <button type='reset' onClick={onClickReset}>취소</button>
        </form>
      </AppLayout>
    </>
  );
}
