import { Button, Htag, P } from "@/components";
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
    </>
  );
}
