import Layout from '../components/Layout'
import Label from '../components/Label'
import Input from '../components/Input'

const Home = (): JSX.Element => (
  <Layout title="Inputs">
    <div className="grid grid-cols-3 gap-10">
      <div className="col-span-3">
        <Label>{`<Input />`}</Label>
        <Input />
      </div>
      <div className="col-span-3">
        <Label>{`<Input error />`}</Label>
        <Input error />
      </div>
      <div className="col-span-3">
        <Label>{`<Input disabled />`}</Label>
        <Input disabled />
      </div>
      <div>
        <Label>{`<Input helperText=”Some interesting text” />`}</Label>
        <Input helperText="Some interesting text" />
      </div>
      <div>
        <Label>{`<Input helperText=”Some interesting text” error />`}</Label>
        <Input helperText="Some interesting text" error />
      </div>
      <div className="col-start-1">
        <Label>{`<Input startIcon="phone" />`}</Label>
        <Input startIcon="phone" />
      </div>
      <div>
        <Label>{`<Input endIcon="lock" />`}</Label>
        <Input endIcon="lock" />
      </div>
      <div className="col-start-1">
        <Label>{`<Input value="text" />`}</Label>
        <Input value="text" />
      </div>
      <div className="col-start-1">
        <Label>{`<Input size="sm" />`}</Label>
        <Input size="sm" />
      </div>
      <div>
        <Label>{`<Input size="md" />`}</Label>
        <Input size="md" />
      </div>
      <div className="col-start-1 col-span-3">
        <Label>{`<Input fullWidth />`}</Label>
        <Input fullWidth />
      </div>
      <div className="col-start-1 col-span-3">
        <Label>{`<Input multiline row="4" />`}</Label>
        <Input multiline row="4" />
      </div>
    </div>
  </Layout>
)

export default Home
