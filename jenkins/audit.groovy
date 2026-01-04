stage('yarn audit scan'){
    sh '''
      echo "scanning using yarn audit"
      yarn audit
    '''
}