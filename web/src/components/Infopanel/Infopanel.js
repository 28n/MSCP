const Infopanel = ({ infoPanel }) => {
  let PanelDate = new Date(infoPanel.createdAt)
  let DateString = PanelDate.toLocaleDateString()
  return (
    <div className="c">
      <h1>{infoPanel.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: infoPanel.content }} />
      <br />
      <hr />
      <br />
      <p className="text-sm text-gray-300 font-thin">
        von {infoPanel.createdBy} am {DateString} - letzte Änderung von{' '}
        {infoPanel.changedBy}
      </p>
    </div>
  )
}

export default Infopanel
