import { Button, Htag, P, Tag } from "@/components";
import { JSX } from "react";
import React from "react";



export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка 2</Button>
      <P size='small'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate beatae aliquid iusto, commodi facilis voluptate rem illo ipsam voluptatibus ab.</P>
      <P size='medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione expedita excepturi distinctio debitis dignissimos! Quas repudiandae praesentium adipisci unde laboriosam reprehenderit nobis vel doloremque cum.</P>
      <P size='large'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, illum.</P>
      <Tag size="small">Ghost</Tag>
      <Tag size="small" color="red">Red</Tag>
      <Tag size="small" color="green">Green</Tag>
      <Tag size="medium" color="gray">Gray</Tag>
      <Tag size="large" color="primary">Primary</Tag>
    </>
  );
}
