const Timeline = (props) => (
    <div className="timeline">
       {
          props.Data.map((data, id) => {
          return <ul className="timeline-item" key={id}>
                   <li id={id}>{data.instituto}</li>
                   <li id={id}><strong>{data.ano}</strong></li>
                   <li id={id}>{data.formacao}</li>
                   {
                      data.certificado ? <a href={data.certificado} target="_blank" id={id}>Certificado</a> : ""
                   }
                </ul>
          })
       }
       </div>
 )

 export default Timeline