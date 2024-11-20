

export function shake(t){

  gsap.fromTo(t,
    { x:-10, },
    {
    duration:0.1,
    x:0,
    repeat:5,
    yoyo:true,
  })
  
}