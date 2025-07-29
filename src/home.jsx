function Home() {
  function AddLink(props) {
    return (
    <>
      <a className='AddLink' href={props.href} > {props.name} </a>
      <br />
      </>
    )
  }
  return (
    <div className='home'>
    <div>
      <h1>TROOP 423</h1>
      <img src="https://i.ibb.co/6pbxLMB/1.jpg" alt="1" border="0" style={{ maxWidth: '100%', height: 'auto', display: 'block'}}/>
         <h2> Scouting Done Right in Beaver County</h2>
         <p>Troop 423 of the Boy Scouts of America, based in Center Township, Pennsylvania, has proudly served youth in Center Township, and across Beaver County for over 60 years  . Chartered to provide hands‑on outdoor adventures, leadership training, and meaningful community service, Troop 423 unites Scouts and adult volunteers in a tradition of character, camaraderie, and community connection. From camping excursions to supporting local initiatives and annual participation in events, Troop 423 continues to inspire generations of young leaders guided by Scouting values.</p>
          <h3>Links</h3>
         <AddLink name='Laural Highlands Council' href='https://lhcscouting.org/a.org/' />
         <AddLink name='Scoutbook' href='https://scoutbook.scouting.org/?Redir=%2Fmobile%2Fdashboard%2FDefault%2Easp%3F' />
         <AddLink name='BSA Official Site' href='https://www.scouting.org/' />
    </div>

    </div>
  );
}

export default { Home, AddLink };
 
