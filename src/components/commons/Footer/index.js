import { getCMSContent } from '../../../infra/cms/CMSProvider';

export function Footer() {
  const description = getCMSContent('globalContent.globalFooter.descricao');
  return (
    <>
        <p>{description}</p>
    </>
  )
}