const Header = ({selectedTeam, teamMemberCount}) => {

  return (
    <header className="container">
      <div className="row justify-content-center mt-4 mb-4">
        <div className="col-8">
          <h1>Team Member Allocation</h1>
          <h3>{selectedTeam} has {teamMemberCount} member{teamMemberCount === 1 ? "" : "s"}</h3>
        </div>
      </div>
    </header>
  )
}

export default Header;