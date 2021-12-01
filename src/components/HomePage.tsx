import Button from 'react-bootstrap/Button'
import { Container, FormControl, InputGroup, Row } from "react-bootstrap"
import { useEffect, useState } from 'react'
import Music from '../interfaces/music'
import SingleMusicCard from './SingleMusicCard'

const HomePage = () => {
    const [music, setMusic] = useState<Music[]>([])
    const [search, setSearch] = useState('bill withers')

    const getMusic = async () => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`)
            if(response.ok) {
                let data = await response.json()
                console.log(data)
                setMusic(data.data)
            } else {
                console.log('no fetch')
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMusic()
    }, [search])
    return(
            <Container>
        <InputGroup className="mb-3">
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>
      
<Row>
      {
          music.map((track) => (
              <SingleMusicCard key={track.id} track={track} />
          ))
      }
      </Row>
      </Container>
    )
}

export default HomePage