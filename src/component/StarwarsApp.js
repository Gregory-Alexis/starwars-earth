import { useState, useEffect } from "react"
import "../index.css"

const StarwarsApp = () => {
	const [climats, setClimat] = useState("")
	const [earthName, setEarthName] = useState([])
	const [population, setPopulation] = useState("")
	useEffect(() => {
		const url = `https://swapi.dev/api/planets/`

		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error("planet introuvable")
				}
				return response.json()
			})
			.then((data) => {
				console.log(data)
				setEarthName(data.results)
			})
			.catch((error) => {
				alert(error.message)
			})
	}, [])
	return (
		<section className="container py-5 ">
			<h1 className="mb-5 text-center">Planètes dans l'univers Star Wars</h1>
			<div className="row">
				<div className="col-md-6 col-lg-4 col-xl-3">
					<article>
						{earthName.map((el) => {
							const { name, population, climate } = el
							return (
								<div key={name} className="bg-warning ps-2 border p-4">
									<h2>{name}</h2>
									<p>
										<b>POPULATION</b>
									</p>
									<p>{population}</p>
									<p>
										<b>Climat</b>
									</p>
									<p>{climate}</p>
								</div>
							)
						})}
					</article>
				</div>
			</div>
		</section>
	)
}

export default StarwarsApp
