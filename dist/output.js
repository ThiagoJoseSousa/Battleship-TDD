(()=>{
  const e={62: (e, t, r)=>{
    const a=r(427); e.exports=(e)=>{
      const t=a(); const r=e; let n=!1; const s=[new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10)]; return {createBoard: t, attack: (e, t, a)=>{
        if ('player'===r) {
          if (!1===a.createBoard.receiveAttack(e, t)) return; a.turnVariable=!0, n=!0;
        } else if ('computer'===r) {
          a.turnVariable=!1, n=!1; const e=Math.floor(Math.random()*s.length-1); const t=Math.floor(Math.random()*s[e].length-1); s[e].splice(t, 1), a.createBoard.receiveAttack(e, t);
        }
      }, returnX: ()=>XnumbersArray, returnY: ()=>YnumbersArray, turnVariable: n, player: r, computerRemembers: s};
    };
  }, 171: (e, t, r)=>{
    r(995).default, r(62).default, e.exports=(e, t)=>{
      const r=document.getElementById(e.player+'Div'); function a() {
        e.createBoard.board.forEach(((a)=>{
          const s=Number(e.createBoard.board.indexOf(a)); let o=0; e.createBoard.board[s].forEach(((e)=>{
            const a=document.createElement('div'); a.dataset.x=s, a.dataset.y=o, o+=1, a.classList.add('squares'), 'player'===t.player&&a.addEventListener('click', n, !1), r.appendChild(a);
          }));
        }));
      } const n=(r)=>{
        const a=r.target.getAttribute('data-x'); const n=r.target.getAttribute('data-y'); !1===t.turnVariable&&t.createBoard.allSunk()&&e.createBoard.allSunk()&&t.attack(a, n, e), e.attack(4, 4, t);
      }; return a(), a;
    };
  }, 427: (e, t, r)=>{
    const a=r(922); e.exports=()=>{
      const e=[new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10)]; const t=a(5, 'Carrier'); const r=a(4, 'Battleship'); const n=a(3, 'Cruiser'); const s=a(3, 'Submarine'); const o=a(2, 'Destroyer'); for (let t=0; t<e.length; t++) for (let r=0; r<e[t].length; r++)e[t][r]=''; const c=(t, r, a)=>{
        const n=r; let s=a; const o=t.lengthStatus; let c=!1; for (let t=0; t<o; t++)c=''===e[n][s], ++s; return ()=>c;
      }; const l=(t, r, a)=>{
        const n=r; let s=a; const o=t.lengthStatus; const l=c(t, n, s); if (s+o<10&&!0===l()) {
          for (let r=0; r<o; r++) {
            switch (t.name) {
              case 'Carrier': e[n][s]='A'; break; case 'Battleship': e[n][s]='B'; break; case 'Cruiser': e[n][s]='C'; break; case 'Submarine': e[n][s]='D'; break; case 'Destroyer': e[n][s]='E';
            }s++;
          } return !0;
        } return !1;
      }; const u=(e)=>{
        let t=Math.floor(10*Math.random()); let r=Math.floor(10*Math.random()); let a=l(e, t, r); for (;!1===a;)t=Math.floor(10*Math.random()), r=Math.floor(10*Math.random()), a=l(e, t, r);
      }; return u(t), u(r), u(n), u(s), u(o), {board: e, getBoard: ()=>e, positionShip: l, spaceChecker: (e, t, r)=>{
        const a=r; const n=e.lengthStatus; let s=!1; return n+a<10&&c(e, t, r)&&(s=!0), ()=>s;
      }, checkForShips: c, receiveAttack: (a, c)=>{
        switch (e[a][c]) {
          case 'A': e[a][c]='hit', t.lengthStatus-=1; break; case 'B': e[a][c]='hit', r.lengthStatus-=1; break; case 'C': e[a][c]='hit', n.lengthStatus-=1; break; case 'D': e[a][c]='hit', s.lengthStatus-=1; break; case 'E': e[a][c]='hit', o.lengthStatus-=1; break; case '': e[a][c]='miss'; break; default: return !1;
        }
      }, allSunk: ()=>0!==t.lengthStatus||0!==r.lengthStatus||0!==n.lengthStatus||0!==s.lengthStatus||0!==o.lengthStatus};
    };
  }, 995: (e, t, r)=>{
    const a=r(62); const n=r(171); const s=()=>{
      const e=a('player'); const t=a('computer'); n(e, t), n(t, e);
    }; s(), e.exports=s;
  }, 922: (e)=>{
    e.exports=(e, t)=>{
      let r=e; const a=()=>{
        let e=!1; return 0===r&&(e=!0), e;
      }; return {hit: ()=>{
        r-=1, a();
      }, lengthStatus: r, lengthUpdate: ()=>r, name: t, sinkChecker: a};
    };
  }}; const t={}; !function r(a) {
    const n=t[a]; if (void 0!==n) return n.exports; const s=t[a]={exports: {}}; return e[a](s, s.exports, r), s.exports;
  }(995);
})();
