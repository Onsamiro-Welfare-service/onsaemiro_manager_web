'use client'
import AchromaticButton from "./ui/atom/button/button";
import ToggleButton from "./ui/atom/toggle/toggle-button";
import Callout from "./ui/molecule/callout/callout";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/molecule/card/card";
import { Dialog, DialogContent, DialogTrigger } from "./ui/molecule/dialog/dialog";

export default function Home() {
  return (
    <main>
      <div className="p-10 flex flex-col gap-3">
        <div className="text-xl font-bold text-center">컴포넌트 예제</div>
        <div className="text-lg font-medium text-center">아토믹 컴포넌트들은 headless로 구성되었기 때문에 스타일링 할 수 있습니다.</div>

        <h1>카드 예제</h1>
        <hr/>
        <Card>
          <CardHeader className="font-bold">카드 컴포넌트 예제</CardHeader>
          <CardContent>여기는 내용이 들어갈 수 있어요.</CardContent>
          <CardContent className="text-blue-600">className을 프롭스로 받을 수 있어 자유롭게 커스텀 가능해요.</CardContent>
          <CardFooter>레이아웃을 구성하는 요소로 통일감있게 사용하면 좋을 것 같아요!</CardFooter>
        </Card>

        <h1>버튼 예제</h1>
        <hr/>
        <div className="grid grid-cols-5 gap-4 mx-5">
          <AchromaticButton>기본 버튼</AchromaticButton>
          <AchromaticButton variant={'destructive'}>기본 버튼</AchromaticButton>
          <AchromaticButton variant={'ghost'}>기본 버튼</AchromaticButton>
          <AchromaticButton variant={'outline'}>기본 버튼</AchromaticButton>
          <AchromaticButton variant={'secondary'}>기본 버튼</AchromaticButton>
        </div>

        <h1>다이얼로그(모달) 예제</h1>
        <hr/>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <AchromaticButton>DialogTrigger</AchromaticButton>
            </DialogTrigger>
            <DialogContent title="다이얼로그 이름">
              <div className="p-5 text-center">
                <p>기본 다이얼로그입니다.</p>
                <p>기본 다이얼로그입니다.</p>
                <p>기본 다이얼로그입니다.</p>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <h1>토글 예제</h1>
        <hr/>
        <ToggleButton text={"안녕"} onToggle={(active)=>{ if(active)alert('토글이 활성화 되었습니다.')}}/>

        <h1>콜 아웃 예제</h1>
        <hr/>
        <Callout content={"정상입니다."}></Callout>
        <Callout content={"오류입니다."} variant={'destructive'}></Callout>
        <Callout content={"경고입니다."} variant={'warning'}></Callout>
      </div>
    </main>
  );
}
