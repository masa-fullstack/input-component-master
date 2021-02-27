import Layout from '../components/Layout'
import Label from '../components/Label'
import Button from '../components/Button'

const Home = (): JSX.Element => (
  <Layout title="Buttons">
    <div className="grid grid-cols-4 gap-10">
      <div className="col-span-4">
        <Label>{`<Button />`}</Label>
        <Button />
      </div>
      <div className="col-span-4">
        <Label>{`<Button variant=”outline” />`}</Label>
        <Button variant="outline" />
      </div>
      <div className="col-span-4">
        <Label>{`<Button variant=”text” />`}</Label>
        <Button variant="text" />
      </div>
      <div className="col-span-4">
        <Label>{`<Button disableShadow />`}</Label>
        <Button disableShadow />
      </div>
      <div className="col-span-2">
        <Label>{`<Button disabled />`}</Label>
        <Button disabled />
      </div>
      <div className="col-span-2">
        <Label>{`<Button variant="text" disabled />`}</Label>
        <Button variant="text" disabled />
      </div>
      <div className="col-span-2">
        <Label>{`<Button startIcon="local_grocery_store" />`}</Label>
        <Button startIcon="local_grocery_store" />
      </div>
      <div className="col-span-2">
        <Label>{`<Button startIcon="local_grocery_store" />`}</Label>
        <Button endIcon="local_grocery_store" />
      </div>
      <div>
        <Label>{`<Button size=”sm” />`}</Label>
        <Button size="sm" />
      </div>
      <div>
        <Label>{`<Button size=”md” />`}</Label>
        <Button size="md" />
      </div>
      <div>
        <Label>{`<Button size=”lg” />`}</Label>
        <Button size="lg" />
      </div>
      <div className="col-start-1">
        <Label>{`<Button color=”default” />`}</Label>
        <Button color="default" />
      </div>
      <div>
        <Label>{`<Button color=”primary” />`}</Label>
        <Button color="primary" />
      </div>
      <div>
        <Label>{`<Button color=”secondary” />`}</Label>
        <Button color="secondary" />
      </div>
      <div>
        <Label>{`<Button color=”danger” />`}</Label>
        <Button color="danger" />
      </div>
    </div>
  </Layout>
)

export default Home
