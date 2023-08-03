import { useCallback, useEffect } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'
import { useSnackbar } from 'notistack'

export default function SW() {
  const { closeSnackbar, enqueueSnackbar } = useSnackbar()
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW()

  const close = useCallback(() => {
    setOfflineReady(false)
    setNeedRefresh(false)
    closeSnackbar()
  }, [setOfflineReady, setNeedRefresh])

  useEffect(() => {
    if (offlineReady) {
      enqueueSnackbar('App pronto para rodar offline', {
        variant: 'info',
      })
    } else if (needRefresh) {
      enqueueSnackbar('Novo conteudo disponivel, clique aqui para atualizar', {
        variant: 'warning',
        action: () => (
          <>
            <button
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              onClick={() => updateServiceWorker(true)}
            >
              Recarregar
            </button>
            <button
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              onClick={close}
            >
              Close
            </button>
          </>
        ),
      })
    }
  }, [close, needRefresh, offlineReady, updateServiceWorker])

  return null
}
