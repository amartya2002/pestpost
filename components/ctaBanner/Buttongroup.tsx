"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import "./ButtonGroup.css"

function ButtonGroup() {
  const [selected, setSelected] = useState('residential');

  const handleSelect = (option: React.SetStateAction<string>) => {
    setSelected(option);
  };

  return (
    <div className="flex gap-2">
      <div>
        <Link
          href="/residential"
          className={selected === 'residential' ? 'selected' : ''}
          onClick={() => handleSelect('residential')}
        >
          Residential
        </Link>
      </div>
      <div>
        <Link
          href="/commercial"
          className={selected === 'commercial' ? 'selected' : ''}
          onClick={() => handleSelect('commercial')}
        >
          Commercial
        </Link>
      </div>
    </div>
  );
}

export default ButtonGroup;
