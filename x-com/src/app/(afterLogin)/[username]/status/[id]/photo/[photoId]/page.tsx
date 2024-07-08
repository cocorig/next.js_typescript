import Home from "@/app/(afterLogin)/home/page";
import PhotoModalPage from "@/app/(afterLogin)/@modal/(.)[username]/status/[id]/photo/[photoId]/_component/PhotoModalPage";
type Props = {
  params: { username: string; id: string; photoId: string };
};
// 경로 slug 얻을 수 있다.
export default function Page({ params }: Props) {
  params.username; // elonmusk
  params.id; // 1
  params.photoId; // 1
  return (
    <>
      <Home />
      <PhotoModalPage />
    </>
  );
}
