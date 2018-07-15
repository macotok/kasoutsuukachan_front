import React from 'react';
import db from '../../../api/stub';

const ThreadList = () => {
  const threadList = db.thread;
  console.log(threadList);
  return (
    <p>
      スレッド一覧
    </p>
  );
};

export default ThreadList;
