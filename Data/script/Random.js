function Random(){
  let Output_Num_01 = document.querySelector('#Output_Num > .Direction');
  let Output_Num_02 = document.querySelector('#Output_Num > .Num');
  let RanNum = Math.round((10 * Math.random()));
  let RanNum_ = Math.round((1 * Math.random()));
  const Direction = ['⇧', '⇩'];

  if(RanNum === 0){
    alert('값이 0이므로 한번 더 클릭해주세요!!');
  } else{
    Output_Num_01.innerHTML = Direction[RanNum_];
    Output_Num_02.innerHTML = RanNum; // 결과출력
  };
};