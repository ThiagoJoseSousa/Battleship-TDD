(()=>{
  const t={62: (t, e, r)=>{
    const a=r(427); t.exports=(t)=>{
      const e=a(); const r=t; const n=[]; return {createBoard: e, attack: (t, e, a)=>{
        if ('player'===r) {
          if (!1===a.createBoard.receiveAttack(t, e)) return; return !0;
        } if ('computer'===r) {
          let t=Math.floor(10*Math.random()); let e=Math.floor(10*Math.random()); for (;n.includes(`${t}${e}`);)t=Math.floor(10*Math.random()), e=Math.floor(10*Math.random()); n.push(`${t}${e}`), a.createBoard.receiveAttack(t, e);
        }
      }, returnX: ()=>XnumbersArray, returnY: ()=>YnumbersArray, turnVariable: !1, returnTurn: ()=>!1, player: r, computerRemembers: n};
    };
  }, 171: (t, e, r)=>{
    r(995).default, r(62).default; const a=(t, e)=>{
      const r=document.getElementById(t.player+'Div'); function n() {
        t.createBoard.board.forEach(((a)=>{
          const n=Number(t.createBoard.board.indexOf(a)); let o=0; t.createBoard.board[n].forEach(((t)=>{
            const a=document.createElement('div'); a.dataset.x=n, a.dataset.y=o, o+=1, a.classList.add('squares'), 'player'===e.player&&(a.addEventListener('click', s, !1), a.classList.add('computerBoard')), ''===t&&a.classList.add('fogofwar'), 'miss'===t&&a.classList.add('miss'), 'hit'===t&&a.classList.add('hit'), r.appendChild(a);
          }));
        }));
      }r.textContent=''; const s=(r)=>{
        const n=r.target.getAttribute('data-x'); const s=r.target.getAttribute('data-y'); e.createBoard.allSunk(t.player)&&t.createBoard.allSunk(e.player)&&!0===e.attack(n, s, t)&&(t.attack(4, 4, e), a(e, t)), a(t, e);
      }; return n(), n;
    }; t.exports=a;
  }, 427: (t, e, r)=>{
    const a=r(922); t.exports=()=>{
      const t=[new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10)]; const e=a(5, 'Carrier'); const r=a(4, 'Battleship'); const n=a(3, 'Cruiser'); const s=a(3, 'Submarine'); const o=a(2, 'Destroyer'); for (let e=0; e<t.length; e++) for (let r=0; r<t[e].length; r++)t[e][r]=''; const c=(e, r, a)=>{
        const n=r; let s=a; const o=e.lengthStatus; let c=!1; for (let e=0; e<o; e++)c=''===t[n][s], ++s; return ()=>c;
      }; const l=(e, r, a)=>{
        const n=r; let s=a; const o=e.lengthStatus; const l=c(e, n, s); if (s+o<10&&!0===l()) {
          for (let r=0; r<o; r++) {
            switch (e.name) {
              case 'Carrier': t[n][s]='A'; break; case 'Battleship': t[n][s]='B'; break; case 'Cruiser': t[n][s]='C'; break; case 'Submarine': t[n][s]='D'; break; case 'Destroyer': t[n][s]='E';
            }s++;
          } return !0;
        } return !1;
      }; const u=(t)=>{
        let e=Math.floor(10*Math.random()); let r=Math.floor(10*Math.random()); let a=l(t, e, r); for (;!1===a;)e=Math.floor(10*Math.random()), r=Math.floor(10*Math.random()), a=l(t, e, r);
      }; return u(e), u(r), u(n), u(s), u(o), {board: t, getBoard: ()=>t, positionShip: l, spaceChecker: (t, e, r)=>{
        const a=r; const n=t.lengthStatus; let s=!1; return n+a<10&&c(t, e, r)&&(s=!0), ()=>s;
      }, checkForShips: c, receiveAttack: (a, c)=>{
        switch (t[a][c]) {
          case 'A': t[a][c]='hit', e.lengthStatus-=1; break; case 'B': t[a][c]='hit', r.lengthStatus-=1; break; case 'C': t[a][c]='hit', n.lengthStatus-=1; break; case 'D': t[a][c]='hit', s.lengthStatus-=1; break; case 'E': t[a][c]='hit', o.lengthStatus-=1; break; case '': t[a][c]='miss'; break; default: return !1;
        } return !0;
      }, allSunk: (t)=>0!==e.lengthStatus||0!==r.lengthStatus||0!==n.lengthStatus||0!==s.lengthStatus||0!==o.lengthStatus||(alert(t+' won, game has ended.'), !1)};
    };
  }, 995: (t, e, r)=>{
    const a=r(62); const n=r(171); const s=()=>{
      const t=a('player'); const e=a('computer'); n(t, e), n(e, t);
    }; s(), t.exports=s;
  }, 922: (t)=>{
    t.exports=(t, e)=>{
      let r=t; const a=()=>{
        let t=!1; return 0===r&&(t=!0), t;
      }; return {hit: ()=>{
        r-=1, a();
      }, lengthStatus: r, lengthUpdate: ()=>r, name: e, sinkChecker: a};
    };
  }}; const e={}; !function r(a) {
    const n=e[a]; if (void 0!==n) return n.exports; const s=e[a]={exports: {}}; return t[a](s, s.exports, r), s.exports;
  }(995);
})();
