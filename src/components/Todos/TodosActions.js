import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'

import Button from '../UI/Button'
/* .. выйти из папки Todos в папку components 
и лальше просто в папки зайти */

function TodosActions() {
  return (
    <>
      <Button title="Reseset Todos">
        <RiRefreshLine />
      </Button>

      <Button title="Clear Completed Todos">
        <RiDeleteBin2Line />
      </Button>
    </>
  )
}

export default TodosActions
