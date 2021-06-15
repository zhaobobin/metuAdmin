import React from 'react';

interface ITableShowTotalProps {
  total: number;
  pageNum: number;
  pageSize: number;
}

const TableShowTotal = ({ total, pageNum, pageSize }: ITableShowTotalProps) => {
  const precent = total % pageSize;
  const totalPage = Math.floor(total / pageSize);
  const spanStyle = { marginRight: '20px', color: '#888' };
  return (
    <p>
      <span style={spanStyle}>{total}条记录</span>
      <span style={spanStyle}>
        {pageNum}/{precent ? totalPage + 1 : totalPage}页
      </span>
    </p>
  );
};

export default TableShowTotal;
