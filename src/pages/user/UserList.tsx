import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { AppLayout } from '@/layouts/AppLayout';
import { IUser } from '@/types';

export function UserList() {
  const {
    isLoading, isError, error, data,
  } = useQuery<IUser[], Error>([ 'getList', ], async () => {
    const res = await axios.get('http://localhost:4000/user/');

    return res.data;
  });

  if (isLoading) {
    return (
      <div>로딩중...</div>
    );
  }

  if (isError) {
    return (
      <div>{error.message}</div>
    );
  }

  return (
    <>
      <AppLayout>
        <h1>User List</h1>
        <div>
          {data.map((item) => (
            <div key={item.id}>
              <div>{item.userId}</div>
              <div>{item.password}</div>
            </div>
          ))}
        </div>
      </AppLayout>
    </>
  );
}
