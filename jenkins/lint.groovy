stage('Lint') {
    sh '''
      echo "Running ESLint..."
      yarn lint
    '''
}
